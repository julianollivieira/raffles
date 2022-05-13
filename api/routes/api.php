<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Authentication & authorization
Route::post('/sign-in', [AuthController::class, 'signIn'])->name('signIn');
Route::post('/create-account', [AuthController::class, 'createAccount'])->name('createAccount');
Route::post('/sign-out', [AuthController::class, 'signOut'])->name('signOut');
Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
Route::post('/me', [AuthController::class, 'me'])->name('me');
