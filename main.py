import webview
import threading
import keyboard
from flask import Flask

def create_flask_app():
    from app import app
    return app

def start_flask():
    app = create_flask_app()
    app.run()

def toggle_window_visibility(window):
    global window_visible
    if window_visible:
        window.hide()
    else:
        window.show()
    window_visible = not window_visible

def main():
    global window_visible
    window_visible = True

    flask_thread = threading.Thread(target=start_flask, daemon=True)
    flask_thread.start()

    window = webview.create_window(
        "Application", 
        "http://127.0.0.1:5000/", 
        width=800, 
        height=500, 
        frameless=True, 
        on_top=True
    )

    keyboard.add_hotkey('home', toggle_window_visibility, args=(window,))

    webview.start()

if __name__ == '__main__':
    main()
