@extends('layouts.app')

@section('content')
    <div id="routerView">
        <router-view title="{{ __('Dashboard') }}" session-status="{{ session('status') }}" message="{{ __('You are logged in!') }}"></router-view>
    </div>
@endsection
