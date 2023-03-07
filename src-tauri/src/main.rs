// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

///////////////////////////////
// Potential security strategies
///////////////////////////////

/*
Obfuscation: This involves hiding the code or structure of a program or data in order to make it difficult to understand or reverse-engineer.

Access Control: This is a mechanism that allows only authorized users or processes to access or modify the data.

Data Masking: This is a technique of modifying the data in a way that it appears as meaningless to unauthorized users, while retaining its original format.

Steganography: This is the practice of hiding data within another file or message, such that it is not easily detected by unauthorized users.

Redaction: This is the process of removing sensitive information from a document or data, so that it can be shared with others without compromising the privacy of individuals or organizations.

Data Fragmentation: This is a technique of splitting data into multiple fragments, so that even if one fragment is accessed or stolen, it does not provide access to the complete data.

Data Encryption at rest: Encrypting data while it is stored in storage devices such as hard drives or flash drives.

*/
