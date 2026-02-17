import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminLayout from "@/layouts/admin-layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface Props {
  Words: {
    id: number;
    word: string;
  }[];
  RelatedWord: {
    id: number;
    word_id: number;
    related_word_id: number;
    relation_type: string;
  };
}
export default function Edit({ Words, RelatedWord }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    word_id: RelatedWord.word_id,
    related_word_id: RelatedWord.related_word_id,
    relation_type: RelatedWord.relation_type,
    _method: "put",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("admin.rwm.related-words.update", RelatedWord.id), {
      onSuccess: () => {
        toast.success("Related word updated successfully!");
      },
      onError: () => {
        toast.error("Failed to update related word. Please check the form for errors.");
      },
    });
  };
  return (
    <AdminLayout activeSlug="related-words">
      <Head title="Edit Related Word" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit Related Word</h1>
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
                    <select
                      value={data.word_id}
                      onChange={e => setData("word_id", e.target.value)}
                    >
                      {Words.map((word) => <option key={word.id} value={word.id}>{word.word}</option>)}
                    </select>

                    <InputError message={errors.word_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="related_word_id">Related Word</Label>
                    <select
                      value={data.related_word_id}
                      onChange={e => setData("related_word_id", e.target.value)}
                    >
                      {Words.map((word) => <option key={word.id} value={word.id}>{word.word}</option>)}
                    </select>

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
                    {processing ? "Updating..." : "Update Related Word"}
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
