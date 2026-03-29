<?php

namespace App\Exports;

use App\Models\Language;
use App\Models\PartOfSpeech;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class WordEntryTemplateExport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            new WordEntryDataSheet(),
            new LanguagesReferenceSheet(),
            new PartsOfSpeechReferenceSheet(),
        ];
    }
}

class WordEntryDataSheet implements FromArray, WithHeadings
{
    public function array(): array
    {
        return [
            [
                'hello',
                'EN',
                'noun',
                'From Old English hǣl',
                '/həˈloʊ/',
                '',
                'hel·lo',
                'A greeting or expression of goodwill',
                '1',
                'informal',
                'Hello, how are you today?',
                'John Doe',
                '1',
                'hi, hey, greetings',
                'goodbye, farewell',
                'greeting, salutation',
                'variant, derived',
            ],
        ];
    }

    public function headings(): array
    {
        return [
            'word',
            'language_code',
            'part_of_speech',
            'etymology',
            'pronunciation_ipa',
            'pronunciation_audio',
            'syllables',
            'definition',
            'definition_sort_order',
            'register',
            'example_sentence',
            'example_author',
            'example_sort_order',
            'synonyms',
            'antonyms',
            'related_words',
            'relation_types',
        ];
    }
}

class LanguagesReferenceSheet implements FromArray, WithHeadings
{
    public function array(): array
    {
        return Language::select('id', 'code', 'name')
            ->orderBy('code')
            ->get()
            ->map(fn ($lang) => [$lang->id, $lang->code, $lang->name])
            ->toArray();
    }

    public function headings(): array
    {
        return ['ID', 'Code', 'Name'];
    }
}

class PartsOfSpeechReferenceSheet implements FromArray, WithHeadings
{
    public function array(): array
    {
        return PartOfSpeech::select('id', 'name', 'abbreviation')
            ->orderBy('name')
            ->get()
            ->map(fn ($pos) => [$pos->id, $pos->name, $pos->abbreviation])
            ->toArray();
    }

    public function headings(): array
    {
        return ['ID', 'Name', 'Abbreviation'];
    }
}
