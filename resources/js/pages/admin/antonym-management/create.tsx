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
  WordDefinitions: {
    id: number;
    definition: string;
  }[];
  Words: {
    id: number;
    word: string;
  }[];
}
export default function Create({ WordDefinitions, Words }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    definition_id: "",
    antonym_word_id: "",
    relevance_score: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("admin.am.antonyms.store"), {
      onSuccess: () => {
        toast.success("Antonym created successfully!");
      },
      onError: () => {
        toast.error("Failed to create antonym. Please check the form for errors.");
      },
    });
  };
  return (
    <AdminLayout activeSlug="antonyms">
      <Head title="Create Antonym" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Create Antonym</h1>
        <Link href={route("admin.am.antonyms.index")}>
          <Button>Back</Button>
        </Link>
      </div>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Antonym Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="definition_id">Word Definition</Label>
                    <select
                      value={data.definition_id}
                      onChange={e => setData("definition_id", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select a Definition</option>
                      {WordDefinitions.map((word) => <option key={word.id} value={word.id}>{word.definition}</option>)}
                    </select>

                    <InputError message={errors.definition_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="antonym_word_id">Antonym Word</Label>
                    <select
                      value={data.antonym_word_id}
                      onChange={e => setData("antonym_word_id", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select a Word</option>
                      {Words.map((word) => <option key={word.id} value={word.id}>{word.word}</option>)}
                    </select>

                    <InputError message={errors.antonym_word_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="relevance_score">Relevance Score</Label>
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
                    {processing ? "Creating..." : "Create Antonym"}
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
