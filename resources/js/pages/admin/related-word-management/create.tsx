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
  BaseWords: {
    data: {
      id: number;
      word: string;
    }[];
  };
  RelatedWords: {
    data: {
      id: number;
      word: string;
    }[];
  };
}
export default function Create({ BaseWords, RelatedWords }: Props) {
  const [baseSearch, setBaseSearch] = useState("");
  const [relatedSearch, setRelatedSearch] = useState("");
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
        route("admin.rwm.related-words.create"),
        {
          base_word_search: baseSearch,
          related_word_search: relatedSearch,
        },
        {
          preserveState: true,
          preserveScroll: true,
          replace: true,
          only: ["BaseWords", "RelatedWords"],
          reset: ["BaseWords", "RelatedWords"],
        },
      );
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [baseSearch, relatedSearch]);

  const { data, setData, post, processing, errors } = useForm({
    word_id: null as number | null,
    related_word_id: null as number | null,
    relation_type: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("admin.rwm.related-words.store"), {
      onSuccess: () => {
        toast.success("Related word created successfully!");
      },
      onError: () => {
        toast.error("Failed to create related word. Please check the form for errors.");
      },
    });
  };
  return (
    <AdminLayout activeSlug="related-words">
      <Head title="Create Related Word" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Create Related Word</h1>
        <Link href={route("admin.rwm.related-words.index")}>
          <Button>Back</Button>
        </Link>
      </div>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Related Word</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="word_id">Base Word</Label>
                    <Select
                      value={data.word_id ? String(data.word_id) : undefined}
                      onValueChange={(value) => setData("word_id", Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select base word" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <Input
                            placeholder="Search base words..."
                            className="mb-2"
                            value={baseSearch}
                            onChange={(event) => setBaseSearch(event.target.value)}
                          />
                        </div>

                        <InfiniteScroll data="BaseWords">
                          {BaseWords?.data?.length ? (
                            BaseWords.data.map((word) => (
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

                    <InputError message={errors.word_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="related_word_id">Related Word</Label>
                    <Select
                      value={data.related_word_id ? String(data.related_word_id) : undefined}
                      onValueChange={(value) => setData("related_word_id", Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select related word" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <Input
                            placeholder="Search related words..."
                            className="mb-2"
                            value={relatedSearch}
                            onChange={(event) => setRelatedSearch(event.target.value)}
                          />
                        </div>

                        <InfiniteScroll data="RelatedWords">
                          {RelatedWords?.data?.length ? (
                            RelatedWords.data.map((word) => (
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

                    <InputError message={errors.related_word_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="relation_type">Relation Type</Label>
                    <Input
                      id="relation_type"
                      type="text"
                      name="relation_type"
                      placeholder="e.g., antonym, synonym, hypernym"
                      value={data.relation_type}
                      onChange={e => setData("relation_type", e.target.value)}
                      className="bg-background/50"
                    />
                    <InputError message={errors.relation_type} />
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
                    {processing ? "Creating..." : "Create Related Word"}
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
