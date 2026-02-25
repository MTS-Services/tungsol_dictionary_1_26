<?php

namespace App\Exports;

use App\Models\Language;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;

class WordTemplateExport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            new WordDataSheet(),
            new WordLanguagesReferenceSheet(),
        ];
    }
}

class WordDataSheet implements FromArray, WithHeadings, WithTitle
{
    public function title(): string
    {
        return 'Word Data';
    }

    public function array(): array
    {
        return [
            ['dictionary', 'EN', '1'],
            ['hello', 'EN', '1'],
        ];
    }

    public function headings(): array
    {
        return ['word', 'language_code', 'is_approved'];
    }
}

class WordLanguagesReferenceSheet implements FromArray, WithHeadings, WithTitle
{
    public function title(): string
    {
        return 'Languages Reference';
    }

    public function array(): array
    {
        return Language::select('id', 'code', 'name')
            ->orderBy('code')
            ->get()
            ->map(fn($lang) => [$lang->id, $lang->code, $lang->name])
            ->toArray();
    }

    public function headings(): array
    {
        return ['ID', 'Code', 'Name'];
    }
}

