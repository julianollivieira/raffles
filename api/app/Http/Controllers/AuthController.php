<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\SignInRequest;
use App\Http\Requests\CreateAccountRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['signIn', 'createAccount']]);
    }

    /**
     * Sign the user in (create a new JWT).
     *
     * @return JsonResponse
     */
    public function signIn(SignInRequest $request)
    {
        $validated = $request->validated();

        if (! $token = auth()->attempt($validated)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Create an account.
     *
     * @return JsonResponse
     */
    public function createAccount(CreateAccountRequest $request)
    {
        $validated = $request->validated();

        User::create(array_merge($validated, [
            'password' => Hash::make($validated['password']),
        ]));

        return response()->json(['message' => 'Account succesfully created']);
    }

    /**
     * Sign the user out (by invalidating the token).
     *
     * @return JsonResponse
     */
    public function signOut()
    {
        auth()->logout();

        return response()->json(['message' => 'Succesfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh()); 
    }

    /**
     * Get the authenticated user.
     *
     * @return JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
