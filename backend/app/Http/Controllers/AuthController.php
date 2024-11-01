<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $data = $request->validated();

            if (!Auth::attempt($data))
                throw new Exception('Login inválido. Email ou senha inválido', 403);

            $user = Auth::user();

            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response('', 204);
    }
}
