import InputError from "@/components/input-error";
import { ActionButton } from "@/components/ui/action-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import FileUpload from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AdminLayout from "@/layouts/admin-layout";
import { PaginationData } from "@/types/data-table.types";
import { Head, InfiniteScroll, router, useForm } from "@inertiajs/react";
import { ArrowLeft, FileUp, Save } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface Word {
  id: number;
  word: string;
}

interface PaginationWords {
  data: Word[];
}

interface PartOfSpeech {
  id: number;
  name: string;
}

interface Props {
  words: PaginationWords;
  partofSpeeches: PartOfSpeech[];
  WordEntry: any;
}

export default function CreateWord({ WordEntry, words, partofSpeeches }: Props) {
  const [search, setSearch] = useState("");
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounce search request
    searchTimeoutRef.current = setTimeout(() => {
      // Reset the infinite scroll when search changes
      router.get(
        route("admin.wm.words-entries.edit", WordEntry.id),
        { search: search },
        {
          preserveState: true,
          preserveScroll: true,
          replace: true,
          only: ["words"],
          reset: ["words"], // Reset infinite scroll data when search changes
        },
      );
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [search]);

  const { data, setData, post, processing, errors } = useForm({
    word_id: WordEntry.id,
    part_of_speech_id: WordEntry.part_of_speech_id,
    sort_order: WordEntry.sort_order,
    etymology: WordEntry.etymology,
    pronunciation_ipa: WordEntry.pronunciation_ipa,
    pronunciation_audio: null as File | null,
    syllables: WordEntry.syllables,
    delete_audio: false,
    _method: "PUT",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("admin.wm.words-entries.update", WordEntry.id), {
      forceFormData: true,
      onSuccess: () => {
        toast.success("System Settings updated successfully");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  // Existing Audio File

  const [audio, setAudio] = useState<any[]>([]);
  useEffect(() => {
    if (WordEntry.audio_url) {
      setAudio([
        {
          id: WordEntry.id,
          url: WordEntry.audio_url,
          name: WordEntry.pronunciation_audio?.split("/").pop() || "Audio",
          mime_type: "audio/*",
          path: WordEntry.audio_url || "",
        },
      ]);
      console.log(WordEntry.audio_url);
    }
  }, [WordEntry]);

  const handleRemoveImageExisting = () => {
    if (
      confirm(
        "Are you sure you want to remove this file? You must upload a new file to save the changes.",
      )
    ) {
      setAudio([]);
      setData("delete_audio", true);
    }
  };

  return (
    <AdminLayout activeSlug="words">
      <Head title="Create Word" />

      <CardHeader className="flex items-center flex-row justify-between">
        <h1 className="text-2xl font-bold">Create Word</h1>
        <ActionButton IconNode={ArrowLeft} href={route("admin.wm.words-entries.index")}>
          Back
        </ActionButton>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Word Entry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="code">Choose Word</Label>
                    <Select onValueChange={(value) => setData("word_id", Number(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select word" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <Input
                            placeholder="Search words..."
                            className="mb-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                          />
                        </div>

                        <InfiniteScroll data="words">
                          {words.data && words.data.length > 0
                            ? (
                              words.data.map((word, index) => (
                                <SelectItem
                                  key={`word-${index}`}
                                  value={String(word.id)}
                                >
                                  {word.word}
                                </SelectItem>
                              ))
                            )
                            : (
                              <div className="p-2 text-sm text-gray-500">
                                {search ? "No words found" : "Start typing to search..."}
                              </div>
                            )}
                        </InfiniteScroll>
                      </SelectContent>
                    </Select>
                    <InputError message={errors.word_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Parts Of Speech</Label>
                    <Select
                      value={String(WordEntry.part_of_speech_id)}
                      onValueChange={(value) => setData("part_of_speech_id", Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Parts Of Speech" />
                      </SelectTrigger>
                      <SelectContent>
                        {partofSpeeches.map((pos) => (
                          <SelectItem key={pos.id} value={String(pos.id)}>
                            {pos.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <InputError message={errors.part_of_speech_id} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Etymology</Label>

                    <Input
                      id="etymology"
                      type="text"
                      autoFocus
                      name="etymology"
                      placeholder="Etymology"
                      value={data.etymology}
                      onChange={(e) => setData("etymology", e.target.value.trim())}
                      className="bg-background/50"
                    />
                    <InputError message={errors.etymology} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Pronunciation Ipa</Label>

                    <Input
                      id="pronunciation_ipa"
                      type="text"
                      autoFocus
                      name="pronunciation_ipa"
                      placeholder="Pronunciation Ipa"
                      value={data.pronunciation_ipa}
                      onChange={(e) => setData("pronunciation_ipa", e.target.value.trim())}
                      className="bg-background/50"
                    />
                    <InputError message={errors.pronunciation_ipa} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Pronunciation Audio</Label>

                    <FileUpload
                      value={data.pronunciation_audio}
                      onChange={(file) => setData("pronunciation_audio", file as File)}
                      multiple={false}
                      accept="audio/*"
                      existingFiles={audio}
                      onRemoveExisting={handleRemoveImageExisting}
                    
                    />
                    <InputError message={errors.pronunciation_audio} />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Syllables</Label>

                    <Input
                      id="syllables"
                      type="text"
                      autoFocus
                      name="syllables"
                      placeholder="Syllables"
                      value={data.syllables}
                      onChange={(e) => setData("syllables", e.target.value.trim())}
                      className="bg-background/50"
                    />
                    <InputError message={errors.syllables} />
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
                    {processing ? "Updating..." : "Update Entry"}
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
