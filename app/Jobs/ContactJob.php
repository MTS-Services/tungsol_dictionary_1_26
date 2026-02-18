<?php

namespace App\Jobs;

use App\Mail\ContactMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class ContactJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
         Mail::to('admin@example.com')->send(new ContactMail($this->data));
    }
}
