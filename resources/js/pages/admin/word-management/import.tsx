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

interface PreviewRow {
    row: number;
    word: string;
    language_code: string;
    is_approved: boolean | null;
    valid: boolean;
    errors: string[];
}

interface Props {
    languages: Language[];
    previewRows?: PreviewRow[];
}

export default function ImportWords({ languages, previewRows = [] }: Props) {
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
        post(route('admin.wm.words.import.preview'), { forceFormData: true });
    };

    const hasPreview = localRows.length > 0;
    const validCount = localRows.filter((row) => row.valid).length;

    const handleConfirmImport = () => {
        if (!hasPreview || validCount === 0) return;
        router.post(route('admin.wm.words.import.confirm'), { rows: localRows as any });
    };

    React.useEffect(() => {
        setLocalRows(previewRows);
    }, [previewRows]);

    return (
        <AdminLayout activeSlug="word-management">
            <Head title="Import Words" />

            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <h1 className="text-2xl font-bold">Import Words from Excel</h1>
                <Button type="button" variant="outline" asChild className="cursor-pointer">
                    <a href={route('admin.wm.words.import.template')}>
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
                            <li>Open the Excel file (2 sheets inside)</li>
                            <li>Check the <strong>Languages Reference</strong> sheet for valid language codes</li>
                            <li>Fill in your words in the <strong>Word Data</strong> sheet</li>
                            <li>Upload the file and click <strong>Preview Import</strong></li>
                            <li>Review validation results, then confirm</li>
                        </ol>
                    </CardContent>
                </Card>

                {/* Column Reference */}
                <Card className="border-violet-100 bg-violet-50/40">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base text-violet-700">
                            <FileSpreadsheet className="h-4 w-4" />
                            Column Reference
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-violet-900 space-y-3">
                        <div>
                            <p className="font-semibold mb-1">Required columns</p>
                            <div className="space-y-1">
                                <div className="flex items-start gap-2">
                                    <span className="mt-0.5 inline-block rounded bg-red-100 px-1.5 py-0.5 text-xs font-mono text-red-700">word</span>
                                    <span className="text-xs text-gray-600">The word text (e.g. hello)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="mt-0.5 inline-block rounded bg-red-100 px-1.5 py-0.5 text-xs font-mono text-red-700">language_code</span>
                                    <span className="text-xs text-gray-600">2–5 letter code (e.g. EN, ES)</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Optional columns</p>
                            <div className="space-y-1">
                                <div className="flex items-start gap-2">
                                    <span className="mt-0.5 inline-block rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-700">is_approved</span>
                                    <span className="text-xs text-gray-600">1 = approved, 0 = pending (default: 0)</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded border border-yellow-200 bg-yellow-50 p-2 text-xs text-yellow-800">
                            <strong>Note:</strong> After importing words, use the <strong>Word Entries</strong> import to add definitions, pronunciation, synonyms, etc.
                        </div>
                    </CardContent>
                </Card>

                {/* Available Languages */}
                <Card className="border-emerald-100 bg-emerald-50/40">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base text-emerald-700">
                            <ListChecks className="h-4 w-4" />
                            Available Languages
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2 text-xs text-emerald-800">
                            Use the <strong>Code</strong> column value in your Excel file.
                        </p>
                        <div className="max-h-48 overflow-y-auto rounded border border-emerald-200 bg-white">
                            <table className="min-w-full text-xs">
                                <thead className="bg-emerald-100 sticky top-0">
                                    <tr>
                                        <th className="px-2 py-1.5 text-left font-semibold text-emerald-800">Code</th>
                                        <th className="px-2 py-1.5 text-left font-semibold text-emerald-800">Language Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {languages.map((lang, i) => (
                                        <tr key={lang.id} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'}>
                                            <td className="px-2 py-1.5 font-mono font-bold text-emerald-700">{lang.code}</td>
                                            <td className="px-2 py-1.5 text-gray-700">{lang.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Upload + Preview */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-1">
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

                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
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

                                    <div className="max-h-[450px] overflow-auto rounded-md border">
                                        <table className="min-w-full text-left text-sm">
                                            <thead className="sticky top-0 bg-gray-50">
                                                <tr>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">#</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Word</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Language</th>
                                                    <th className="px-3 py-2 text-xs font-semibold text-gray-500">Approved</th>
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
                                                        <td className="border-t px-3 py-2 text-xs">
                                                            {row.is_approved === null ? '—' : row.is_approved ? (
                                                                <span className="text-emerald-600 font-medium">Yes</span>
                                                            ) : (
                                                                <span className="text-gray-500">No</span>
                                                            )}
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

