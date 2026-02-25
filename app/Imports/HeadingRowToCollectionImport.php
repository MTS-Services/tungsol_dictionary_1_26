<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

/**
 * Generic import that reads each sheet with a heading row and stores
 * the collection of rows (keyed by header names) for controller use.
 * Use after Excel::import($this, $file) then $import->getSheets().
 */
class HeadingRowToCollectionImport implements ToCollection, WithHeadingRow
{
    /** @var array<int, Collection> */
    protected array $sheets = [];

    public function collection(Collection $rows): void
    {
        $this->sheets[] = $rows;
    }

    /**
     * @return array<int, Collection>
     */
    public function getSheets(): array
    {
        return $this->sheets;
    }
}
