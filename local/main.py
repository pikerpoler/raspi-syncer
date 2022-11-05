from time import sleep
import requests
import threading
import firebase_admin
from firebase_admin import credentials, db
from video_controller import Video


DB_URL = "https://raspi-syncer-default-rtdb.europe-west1.firebasedatabase.app/"
START = "start"
STOP = "stop"
CLOSE = "close"

cred = credentials.Certificate("raspi-syncer-firebase-adminsdk-1.json")

while True:
# repeating untill internet connection is established, and initialization is sucsessul    
    try:
        firebase_admin.initialize_app(cred, {'databaseURL': DB_URL})
        print("connected")
        break
    except:
        print("waiting...")
        pass

doc_ref = db.reference('commands')
doc_ref.set({"action":STOP, "time": 0})

vid = Video()
# Create an Event for notifying main thread.
callback_done = threading.Event()


def message_handler(message):
    print("message: %s" % message)
    
    if message['action'] == START:
        vid.play(message['time'])
    if message['action'] == STOP:
        vid.reset()
    if message['action'] == CLOSE:
        vid.quit()
        sleep(2)
        exit()
    
# Create a callback on_snapshot function to capture changes
def listener(event):
    
    message_handler(event.data)
        
#     callback_done.set()
    
doc_watch = doc_ref.listen(listener)
    

