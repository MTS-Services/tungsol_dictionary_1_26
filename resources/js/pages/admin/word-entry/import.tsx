import React, { useState } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm, router } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Download, Upload, CheckCircle2, AlertCircle, BookOpen, FileSpreadsheet, ListChecks } from 'lucide-react';

interface Language {
    id: number;
    name: string;
    code: string;
}

interface PartOfSpeech {
    id: number;
    name: string;
    abbreviation: string;
}

interface PreviewRow {
    row: number;
    word: string;
    language_code: string;
    part_of_speech: string;
    etymology: string;
    pronunciation_ipa: string;
    syllables: string;
    definition: string;
    synonyms?: string | null;
    antonyms?: string | null;
    related_words?: string | null;
    relation_types?: string | null;
    valid: boolean;
    errors: string[];
}

interface Props {
    languages: Language[];
    partsOfSpeech: PartOfSpeech[];
    previewRows?: PreviewRow[];
}

export default function ImportWordEntries({ languages, partsOfSpeech, previewRows = [] }: Props) {
    const [localRows, setLocalRows] = useState<PreviewRow[]>(previewRows);

    const { data, setData, post, processing, errors } = useForm<{
        file: File | null;
    }>({
        file: null,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setData('file', file);
    };

    const handlePreviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.file) return;

        post(route('admin.wm.words-entries.import.preview'), { forceFormData: true });
    };

    const hasPreview = localRows.length > 0;
    const validCount = localRows.filter((row) => row.valid).length;

    const handleConfirmImport = () => {
        if (!hasPreview || validCount === 0) return;

        router.post(route('admin.wm.words-entries.import.confirm'), { rows: localRows as any });
    };

    React.useEffect(() => {
        setLocalRows(previewRows);
    }, [previewRows]);

    return (
        <AdminLayout activeSlug="word-entries-management">
            <Head title="Import Words & Word Entries" />

            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <h1 className="text-2xl font-bold">Import Words & Word Entries from Excel</h1>
                <Button type="button" variant="outline" asChild className="cursor-pointer">
                    <a href={route('admin.wm.words-entries.import.template')}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                    </a>
                </Button>
            </div>

            {/* Guide Section */}
            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                {/* How it works */}
                <Card className="border-blue-100 bg-blue-50/40">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base text-blue-700">
                            <BookOpen className="h-4 w-4" />
                            How It Works
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-blue-900">
                        <ol className="list-decimal list-inside space-y-1">
                            <li>Click <strong>Download Template</strong> above</li>
                            <li>Open the Excel file — it has <strong>3 sheets</strong></li>
                            <li>Check <strong>Languages Reference</strong> &amp; <strong>Parts of Speech Reference</strong> sheets</li>
                            <li>Fill in your data in the <strong>Word Entry Data</strong> sheet</li>
                            <li>Upload the file and click <strong>Preview Import</strong></li>
                            <li>Review validation results, then confirm</li>
                        </ol>
                        <div className="rounded border border-emerald-200 bg-emerald-50 p-2 text-xs text-emerald-800">
                            <strong>Tip:</strong> Words are created automatically if they don&apos;t exist yet. One import handles both words and word entries.
                        </div>
                    </CardContent>
                </Card>

                {/* Column Reference */}
                <Card className="border-violet-100 bg-violet-50/40 flex flex-col max-h-200">
                    <CardHeader className="pb-2 shrink-0">
                        <CardTitle className="flex items-center gap-2 text-base text-violet-700">
                            <FileSpreadsheet className="h-4 w-4" />
                            All Excel Columns
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-xs overflow-y-auto min-h-0 flex-1">
                        <div>
                            <p className="mb-1 font-semibold text-red-700">Required</p>
                            <div className="space-y-0.5">
                                {[['word', 'The word text'], ['language_code', 'e.g. EN, ES — from Languages sheet'], ['part_of_speech', 'e.g. noun — from Parts of Speech sheet']].map(([col, desc]) => (
                                    <div key={col} className="flex items-start gap-1.5">
                                        <span className="shrink-0 rounded bg-red-100 px-1 py-0.5 font-mono text-red-700">{col}</span>
                                        <span className="text-gray-600">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="mb-1 font-semibold text-gray-600">Word Entry</p>
                            <div className="space-y-0.5">
                                {[['etymology', 'Word origin / history'], ['pronunciation_ipa', 'IPA e.g. /həˈloʊ/'], ['pronunciation_audio', 'Audio file path'], ['syllables', 'e.g. hel·lo']].map(([col, desc]) => (
                                    <div key={col} className="flex items-start gap-1.5">
                                        <span className="shrink-0 rounded bg-gray-100 px-1 py-0.5 font-mono text-gray-700">{col}</span>
                                        <span className="text-gray-600">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="mb-1 font-semibold text-gray-600">Definition</p>
                            <div className="space-y-0.5">
                                {[['definition', 'Definition text'], ['definition_sort_order', 'Order number'], ['register', 'formal / informal / slang…']].map(([col, desc]) => (
                                    <div key={col} className="flex items-start gap-1.5">
                                        <span className="shrink-0 rounded bg-gray-100 px-1 py-0.5 font-mono text-gray-700">{col}</span>
                                        <span className="text-gray-600">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="mb-1 font-semibold text-gray-600">Example</p>
                            <div className="space-y-0.5">
                                {[['example_sentence', 'Usage sentence'], ['example_author', 'Author name'], ['example_sort_order', 'Order number']].map(([col, desc]) => (
                                    <div key={col} className="flex items-start gap-1.5">
                                        <span className="shrink-0 rounded bg-gray-100 px-1 py-0.5 font-mono text-gray-700">{col}</span>
                                        <span className="text-gray-600">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="mb-1 font-semibold text-indigo-700">Relations — comma-separated</p>
                            <div className="space-y-0.5">
                                {[['synonyms', 'e.g. hi, hey, greetings'], ['antonyms', 'e.g. goodbye, farewell'], ['related_words', 'e.g. greeting, salutation'], ['relation_types', 'e.g. variant, derived']].map(([col, desc]) => (
                                    <div key={col} className="flex items-start gap-1.5">
                                        <span className="shrink-0 rounded bg-indigo-100 px-1 py-0.5 font-mono text-indigo-700">{col}</span>
                                        <span className="text-gray-600">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Reference data */}
                <div className="flex flex-col gap-4 min-h-0">
                    <Card className="border-emerald-100 bg-emerald-50/40 flex flex-col max-h-80">
                        <CardHeader className="pb-2 shrink-0">
                            <CardTitle className="flex items-center gap-2 text-base text-emerald-700">
                                <ListChecks className="h-4 w-4" />
                                Available Languages
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-0 flex-1 flex flex-col">
                            <p className="mb-2 text-xs text-emerald-800 shrink-0">Use the <strong>Code</strong> in the <code>language_code</code> column.</p>
                            <div className="h-44 overflow-y-auto overflow-x-hidden rounded border border-emerald-200 bg-white shrink-0">
                                <table className="min-w-full text-xs">
                                    <thead className="sticky top-0 z-10 bg-emerald-100 shadow-sm">
                                        <tr>
                                            <th className="px-2 py-1.5 text-left font-semibold text-emerald-800">Code</th>
                                            <th className="px-2 py-1.5 text-left font-semibold text-emerald-800">Language</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {languages.map((lang, i) => (
                                            <tr key={lang.id} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'}>
                                                <td className="px-2 py-1 font-mono font-bold text-emerald-700">{lang.code}</td>
                                                <td className="px-2 py-1 text-gray-700">{lang.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-orange-100 bg-orange-50/40 flex flex-col max-h-80">
                        <CardHeader className="pb-2 shrink-0">
                            <CardTitle className="flex items-center gap-2 text-base text-orange-700">
                                <ListChecks className="h-4 w-4" />
                                Parts of Speech
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-0 flex-1 flex flex-col">
                            <p className="mb-2 text-xs text-orange-800 shrink-0">Use the <strong>Name</strong> in the <code>part_of_speech</code> column.</p>
                            <div className="h-44 overflow-y-auto overflow-x-hidden rounded border border-orange-200 bg-white shrink-0">
                                <table className="min-w-full text-xs">
                                    <thead className="sticky top-0 z-10 bg-orange-100 shadow-sm">
                                        <tr>
                                            <th className="px-2 py-1.5 text-left font-semibold text-orange-800">Name</th>
                                            <th className="px-2 py-1.5 text-left font-semibold text-orange-800">Abbr.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {partsOfSpeech.map((pos, i) => (
                                            <tr key={pos.id} className={i % 2 === 0 ? 'bg-white' : 'bg-orange-50/50'}>
                                                <td className="px-2 py-1 font-medium text-orange-800">{pos.name}</td>
                                                <td className="px-2 py-1 font-mono text-gray-600">{pos.abbreviation}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Upload + Preview */}
            <div className="grid grid-cols-1 gap-6">
                <div className="max-w-md">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upload Excel File</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <form onSubmit={handlePreviewSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="file">Excel / CSV file</Label>
                                    <Input
                                        id="file"
                                        type="file"
                                        accept=".xlsx,.xls,.csv"
                                        onChange={handleFileChange}
                                    />
                                    <InputError message={errors.file} />
                                </div>
                                <p className="text-xs text-gray-500">
                                    Accepted formats: <strong>.xlsx</strong>, <strong>.xls</strong>, <strong>.csv</strong>
                                </p>
                                <Button
                                    type="submit"
                                    disabled={processing || !data.file}
                                    className="w-full cursor-pointer"
                                >
                                    <Upload className="mr-2 h-4 w-4" />
                                    {processing ? 'Processing...' : 'Preview Import'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full min-w-0">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full min-w-0 overflow-hidden">
                            {!hasPreview && (
                                <div className="flex flex-col items-center justify-center py-10 text-center text-gray-400">
                                    <FileSpreadsheet className="mb-3 h-10 w-10 opacity-30" />
                                    <p className="text-sm">Upload an Excel/CSV file to see a preview here before importing.</p>
                                </div>
                            )}

                            {hasPreview && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-600">
                                            Found <strong>{localRows.length}</strong> rows.{' '}
                                            <span className="font-medium text-emerald-600">{validCount} valid</span>
                                            {' / '}
                                            <span className="font-medium text-red-500">{localRows.length - validCount} with issues</span>.
                                        </p>
                                        <Button
                                            type="button"
                                            disabled={validCount === 0}
                                            onClick={handleConfirmImport}
                                            className="cursor-pointer"
                                        >
                                            <CheckCircle2 className="mr-2 h-4 w-4" />
                                            Import {validCount} valid rows
                                        </Button>
                                    </div>

                                    <div className="w-full max-h-[500px] overflow-auto rounded-md border">
                                        <table className="w-full min-w-full text-left text-sm">
                                            <thead className="sticky top-0 bg-gray-50">
                                                <tr>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">#</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Word</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Language</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Part of Speech</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">IPA</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Definition</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Synonyms</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Antonyms</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Related words</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {localRows.map((row) => (
                                                    <tr key={row.row} className={row.valid ? '' : 'bg-red-50'}>
                                                        <td className="border-t px-3 py-2 text-xs text-gray-400">{row.row}</td>
                                                        <td className="border-t px-3 py-2 font-medium">{row.word}</td>
                                                        <td className="border-t px-3 py-2">
                                                            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xs font-mono text-blue-700">
                                                                {row.language_code}
                                                            </span>
                                                        </td>
                                                        <td className="border-t px-3 py-2">
                                                            <span className="rounded bg-orange-100 px-1.5 py-0.5 text-xs text-orange-700">
                                                                {row.part_of_speech}
                                                            </span>
                                                        </td>
                                                        <td className="border-t px-3 py-2 text-xs text-gray-500 font-mono">
                                                            {row.pronunciation_ipa || '—'}
                                                        </td>
                                                        <td className="border-t px-3 py-2 max-w-xs truncate text-xs">
                                                            {row.definition || '—'}
                                                        </td>
                                                        <td className="border-t px-3 py-2 max-w-[120px] truncate text-xs text-gray-600">
                                                            {row.synonyms || '—'}
                                                        </td>
                                                        <td className="border-t px-3 py-2 max-w-[120px] truncate text-xs text-gray-600">
                                                            {row.antonyms || '—'}
                                                        </td>
                                                        <td className="border-t px-3 py-2 max-w-[120px] truncate text-xs text-gray-600">
                                                            {row.related_words || '—'}
                                                        </td>
                                                        <td className="border-t px-3 py-2">
                                                            {row.errors.length === 0 ? (
                                                                <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                                                                    <CheckCircle2 className="h-3 w-3" /> Ready
                                                                </span>
                                                            ) : (
                                                                <div className="space-y-1 text-xs text-red-600">
                                                                    <span className="inline-flex items-center gap-1">
                                                                        <AlertCircle className="h-3 w-3" /> Issues
                                                                    </span>
                                                                    <ul className="list-disc pl-4">
                                                                        {row.errors.map((err, idx) => (
                                                                            <li key={idx}>{err}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
