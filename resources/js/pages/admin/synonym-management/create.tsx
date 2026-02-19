import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AdminLayout from "@/layouts/admin-layout";
import { Head, InfiniteScroll, Link, router, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface Props {
  WordDefinitions: {
    data: {
      id: number;
      definition: string;
      word_entry_id: number;
      word_entry?: {
        word?: {
          word: string;
        };
      };
    }[];
  };
  Words: {
    data: {
      id: number;
      word: string;
    }[];
  };
}
export default function Create({ WordDefinitions, Words }: Props) {
  const [definitionSearch, setDefinitionSearch] = useState("");
  const [wordSearch, setWordSearch] = useState("");
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      return;
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      router.get(
        route("admin.sm.synonyms.create"),
        {
          definition_search: definitionSearch,
          word_search: wordSearch,
        },
        {
          preserveState: true,
          preserveScroll: true,
          replace: true,
          only: ["WordDefinitions", "Words"],
          reset: ["WordDefinitions", "Words"],
        },
      );
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [definitionSearch, wordSearch]);

  const { data, setData, post, processing, errors } = useForm({
    definition_id: null as number | null,
    synonym_word_id: null as number | null,
    relevance_score: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("admin.sm.synonyms.store"), {
      onSuccess: () => {
        toast.success("Synonym created successfully!");
      },
      onError: () => {
        toast.error("Failed to create synonym. Please check the form for errors.");
      },
    });
  };
  return (
    <AdminLayout activeSlug="synonyms">
      <Head title="Create Synonym" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Create Synonym</h1>
        <Link href={route("admin.sm.synonyms.index")}>
          <Button>Back</Button>
        </Link>
      </div>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Word Example</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="definition_id">Word Definition</Label>
                    <Select
                      value={data.definition_id ? String(data.definition_id) : undefined}
                      onValueChange={(value) => setData("definition_id", Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a definition" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <Input
                            placeholder="Search definitions..."
                            className="mb-2"
                            value={definitionSearch}
                            onChange={(event) => setDefinitionSearch(event.target.value)}
                          />
                        </div>

                        <InfiniteScroll data="WordDefinitions">
                          {WordDefinitions?.data?.length ? (
                            WordDefinitions.data.map((word) => (
                              <SelectItem key={word.id} value={String(word.id)}>
                                {word.definition}
                              </SelectItem>
                            ))
                          ) : (
                            <div className="px-3 py-2 text-sm text-muted-foreground">No definitions found</div>
                          )}
                        </InfiniteScroll>
                      </SelectContent>
                    </Select>

                    <InputError message={errors.definition_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="synonym_word_id">Synonym Word</Label>
                    <Select
                      value={data.synonym_word_id ? String(data.synonym_word_id) : undefined}
                      onValueChange={(value) => setData("synonym_word_id", Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select synonym word" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <Input
                            placeholder="Search words..."
                            className="mb-2"
                            value={wordSearch}
                            onChange={(event) => setWordSearch(event.target.value)}
                          />
                        </div>

                        <InfiniteScroll data="Words">
                          {Words?.data?.length ? (
                            Words.data.map((word) => (
                              <SelectItem key={word.id} value={String(word.id)}>
                                {word.word}
                              </SelectItem>
                            ))
                          ) : (
                            <div className="px-3 py-2 text-sm text-muted-foreground">No words found</div>
                          )}
                        </InfiniteScroll>
                      </SelectContent>
                    </Select>

                    <InputError message={errors.synonym_word_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="source">Source</Label>
                    <Input
                      id="relevance_score"
                      type="number"
                      name="relevance_score"
                      placeholder="score"
                      value={data.relevance_score}
                      onChange={e => setData("relevance_score", e.target.value)}
                      className="bg-background/50"
                    />
                    <InputError message={errors.relevance_score} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-black text-white hover:bg-black/80 cursor-pointer"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {processing ? "Creating..." : "Create Synonym"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </CardContent>
    </AdminLayout>
  );
}
