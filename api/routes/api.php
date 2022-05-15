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
Route::post('/log-in', [AuthController::class, 'logIn'])->name('logIn');
Route::post('/sign-up', [AuthController::class, 'signUp'])->name('signUp');
Route::post('/log-out', [AuthController::class, 'logOut'])->name('logOut');
Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
Route::get('/me', [AuthController::class, 'me'])->name('me');
