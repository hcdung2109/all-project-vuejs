<?php
header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

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
    ->middleware('cors')
    ->group(function () {
        Route::resource('user', 'Api\UserController');
        Route::resource('role', 'Api\RoleController');
        //Route::resource('category', 'Api\CategoryController');
        //Route::resource('tag', 'Api\TagController');
        //Route::resource('post', 'Api\PostController');
        //Route::resource('setting', 'Api\SettingController');
    });
