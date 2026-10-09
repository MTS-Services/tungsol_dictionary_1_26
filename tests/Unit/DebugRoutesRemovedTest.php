<?php

use Illuminate\Support\Facades\Route;

uses(Tests\TestCase::class);

it('does not register unauthenticated debug search routes', function () {
    $uris = collect(Route::getRoutes())->map(fn ($route) => $route->uri());

    expect($uris)->not->toContain('debug-search')
        ->and($uris->contains(fn (string $uri) => str_starts_with($uri, 'debug-')))->toBeFalse();
});
