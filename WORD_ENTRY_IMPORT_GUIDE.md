# Word Entry Import System - User Guide

## Overview
This system allows you to bulk import word entries with all their relations (definitions, examples, synonyms, antonyms, and related words) using Excel files.

## Features
- ✅ Download Excel template with reference data
- ✅ Import word entries with all relations in one go
- ✅ Preview imported data before confirming
- ✅ Validation with detailed error messages
- ✅ Support for multiple relations per word entry

## How to Use

### Step 1: Access the Import Page
1. Navigate to Admin Panel → Word Entries Management
2. Click the "Import from Excel" button

### Step 2: Download the Template
1. Click "Download Template" button
2. The template contains 3 sheets:
   - **Word Entry Data**: Main sheet for entering data
   - **Languages Reference**: Available language codes from your database
   - **Parts of Speech Reference**: Available parts of speech from your database

### Step 3: Fill the Template

#### Required Fields
- **word**: The word text (must already exist in the database)
- **language_code**: Language code (e.g., EN, ES, FR) - use codes from reference sheet
- **part_of_speech**: Part of speech name or abbreviation - use values from reference sheet

#### Optional Fields
- **etymology**: Word origin/history
- **pronunciation_ipa**: IPA phonetic notation (e.g., /həˈloʊ/)
- **pronunciation_audio**: Leave empty (audio files must be uploaded separately)
- **syllables**: Syllable breakdown (e.g., hel·lo)

#### Definition Fields (Optional)
- **definition**: The definition text
- **definition_sort_order**: Order number (default: 0)
- **register**: formal, informal, archaic, slang, etc.
- **domain**: Subject label (e.g., Law, Medicine, Computing)
- **region**: e.g., British English, North American
- **usage_note**: Extra usage guidance

#### Example Fields (Optional)
- **example_sentence**: Example usage sentence
- **example_source**: Book or publication title
- **example_author**: Author name
- **example_year**: Year of citation
- **example_sort_order**: Order number (default: 0)

#### Related Words (Optional - Comma-separated)
- **synonyms**: Comma-separated list of synonym words (e.g., "happy, joyful, glad")
- **synonym_scores**: Comma-separated relevance scores 0-100 (e.g., "100, 95, 90")
- **antonyms**: Comma-separated list of antonym words (e.g., "sad, unhappy")
- **antonym_scores**: Comma-separated relevance scores 0-100 (e.g., "100, 95")
- **related_words**: Comma-separated list of related words
- **relation_types**: Comma-separated relation types (e.g., "variant, derived")

### Step 4: Upload and Preview
1. Upload your filled Excel file
2. Review the preview table showing:
   - Valid rows (green checkmark)
   - Invalid rows (red background with error messages)
3. Check the validation summary at the top

### Step 5: Confirm Import
1. Click "Import X valid rows" button
2. System will import only valid rows
3. You'll see a success message with import statistics

## Important Notes

### Prerequisites
⚠️ **Words must already exist in the database before importing word entries**
- Use the Word Management import to create words first if needed
- Word entries link to existing words by matching word text and language

### Multiple Values
- For synonyms, antonyms, and related words, separate values with commas
- Scores must match the number of words (optional)
- Example: synonyms="happy, joyful" with synonym_scores="100, 95"

### Validation Rules
- Language code must exist in the database
- Part of speech must exist in the database
- Word must exist for the specified language
- All related words (synonyms, antonyms, related) must exist in the database

### Data Relationships
The import creates the following database records:
1. **WordEntry** - Main entry linking word to part of speech
2. **Definition** - Definition with metadata (if provided)
3. **Example** - Usage example (if provided)
4. **Synonym** - Links to synonym words (if provided)
5. **Antonym** - Links to antonym words (if provided)
6. **RelatedWord** - Links to related words (if provided)

## Example Template Row

```
word: hello
language_code: EN
part_of_speech: noun
etymology: From Old English hǣl
pronunciation_ipa: /həˈloʊ/
pronunciation_audio: (leave empty)
syllables: hel·lo
definition: A greeting or expression of goodwill
definition_sort_order: 1
register: informal
domain: General
region: British English
usage_note: Commonly used in casual conversation
example_sentence: Hello, how are you today?
example_source: Conversation
example_author: John Doe
example_year: 2020
example_sort_order: 1
synonyms: hi, hey, greetings
synonym_scores: 100, 95, 90
antonyms: goodbye, farewell
antonym_scores: 100, 95
related_words: greeting, salutation
relation_types: variant, derived
```

## Troubleshooting

### Common Errors
1. **"Word does not exist"**: Create the word first using Word Management
2. **"Language code not found"**: Check the Languages Reference sheet for valid codes
3. **"Part of speech not found"**: Check the Parts of Speech Reference sheet for valid names
4. **"Synonym/Antonym word not found"**: Create those words first

### Tips
- Start with a small batch to test the import
- Use the reference sheets to ensure correct codes
- Check the preview carefully before confirming
- Invalid rows will be skipped, valid rows will be imported

## Technical Details

### Files Created/Modified
- `app/Exports/WordEntryTemplateExport.php` - Template generator
- `app/Http/Controllers/Admin/WordEntriesController.php` - Import logic
- `routes/admin.php` - Import routes
- `resources/js/Pages/admin/word-entry/import.tsx` - Import UI
- `resources/js/Pages/admin/word-entry/index.tsx` - Added import button

### Database Tables Affected
- word_entries
- definitions
- examples
- synonyms
- antonyms
- related_words

### Routes Added
- `GET /admin/word-management/words-entries/import` - Import form
- `GET /admin/word-management/words-entries/import/template` - Download template
- `POST /admin/word-management/words-entries/import/preview` - Preview upload
- `POST /admin/word-management/words-entries/import/confirm` - Confirm import
