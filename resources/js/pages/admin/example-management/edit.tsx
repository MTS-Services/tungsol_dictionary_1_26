import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AdminLayout from "@/layouts/admin-layout";
import { Head, InfiniteScroll, Link, router, useForm } from "@inertiajs/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface WordDefinition {
  id: number;
  word: string;
  definition: string;
}

interface PaginationDefinitions {
  data: WordDefinition[];
}
interface Example {
  id: number;
  sentence: string;
  source: string;
  author: string;
  year: string;
  definition_id: number;
  created_at: string;
  updated_at: string;
}
interface Props {
  WordDefinitions: PaginationDefinitions;
  example: Example;
}



export default function Create({ example, WordDefinitions }: Props) {
  const [search, setSearch] = useState("");
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounce search request
    searchTimeoutRef.current = setTimeout(() => {
      router.get(
        route("admin.em.examples.edit", example.id),
        { search: search },
        {
          preserveState: true,
          preserveScroll: true,
          replace: true,
          only: ["WordDefinitions"],
          reset: ["WordDefinitions"],
        },
      );
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [search, example.id]);

  const { data, setData, post, errors, processing } = useForm({
    definition_id: example.definition_id,
    sentence: example.sentence,
    source: example.source,
    author: example.author,
    year: example.year,
    _method: "put",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("admin.em.examples.update", example.id), {
      onSuccess: () => {
        toast.success("Example updated successfully!");
      },
      onError: () => {
        toast.error("Failed to update example. Please check the form for errors.");
      },
    });
  };

  return (
    <AdminLayout activeSlug="examples">
      <Head title="Edit Example" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit Example</h1>
        <Link href={route("admin.em.examples.index")}>
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
                    <Select onValueChange={(value) => setData("definition_id", Number(value))} value={String(data.definition_id)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select definition" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <Input
                            placeholder="Search definitions..."
                            className="mb-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                          />
                        </div>

                        <InfiniteScroll data="WordDefinitions">
                          {WordDefinitions?.data?.length > 0 ? (
                            WordDefinitions.data.map((definition) => (
                              <SelectItem
                                key={definition.id}
                                value={String(definition.id)}
                              >
                                {definition.definition}
                              </SelectItem>
                            ))
                          ) : (
                            <div className="p-2 text-sm text-gray-500">
                              {search ? "No definitions found" : "Start typing to search..."}
                            </div>
                          )}
                        </InfiniteScroll>

                      </SelectContent>
                    </Select>

                    <InputError message={errors.definition_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="sentence">Sentence</Label>
                    <Textarea
                      id="sentence"
                      name="sentence"
                      placeholder="Sentence"
                      value={data.sentence}
                      onChange={e => setData("sentence", e.target.value)}
                    />
                    <InputError message={errors.sentence} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="source">Source</Label>
                    <Input
                      id="source"
                      type="text"
                      name="source"
                      placeholder="Source"
                      value={data.source}
                      onChange={e => setData("source", e.target.value)}
                      className="bg-background/50"
                    />
                    <InputError message={errors.source} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      type="text"
                      name="author"
                      placeholder="Author"
                      value={data.author}
                      onChange={e => setData("author", e.target.value)}
                      className="bg-background/50"
                    />
                    <InputError message={errors.author} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      max={new Date().getFullYear()}
                      name="year"
                      placeholder="Year"
                      value={data.year}
                      onChange={e => setData("year", e.target.value)}
                      className="bg-background/50"
                    />
                    <InputError message={errors.year} />
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
                    {processing ? "Updating..." : "Update Example"}
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
