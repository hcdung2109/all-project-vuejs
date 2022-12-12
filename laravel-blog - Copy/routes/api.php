<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Admin Panel Routes
Route::name('api.')
    //->middleware('auth')
    ->group(function () {
        Route::resource('user', 'Api\UserController');
        Route::resource('role', 'Api\RoleController');
        //Route::resource('category', 'Api\CategoryController');
        //Route::resource('tag', 'Api\TagController');
        //Route::resource('post', 'Api\PostController');
        //Route::resource('setting', 'Api\SettingController');
    });
