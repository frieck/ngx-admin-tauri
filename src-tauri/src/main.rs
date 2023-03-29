// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn app_started() -> String {
    format!(
        "Welcome, you are running Tauri on a {} ({}) machine!",
        env::consts::OS,
        env::consts::ARCH
    )
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![app_started])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
