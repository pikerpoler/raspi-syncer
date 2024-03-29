from omxplayer.player import OMXPlayer
from pathlib import Path
from time import sleep, time
import pause
from datetime import datetime, timedelta
import time

VIDEO_PATH = Path("/home/pi/Desktop/videos/moonman.mp4")


def parse_time(time_string):
    strings = time_string.split()
    for s in strings:
        if ':' in s:
            return [int(t) for t in s.split(":")]


class Video:

    def __init__(self):
        self.player = OMXPlayer(VIDEO_PATH, args=['--loop'])
        sleep(3)
        self.player.set_position(0)
        self.player.pause()
        self.length = self.player.metadata()['mpris:length']
        
        
    def play(self,time_string):
        time = parse_time(time_string)
        delta = timedelta(seconds=2)
        start_time = datetime.now().replace(hour=time[0],minute=time[1],second=time[2],microsecond=100) + delta
        
        print("now is", datetime.now())
        print(time_string)
        print("waiting untill: ", start_time)
        
        pause.until(start_time)
        self.player.set_position(0)
        self.player.play()

        
    
    def reset(self):
        self.player.set_position(0)
        self.player.pause()

    
    def quit(self):
        self.player.quit()
        exit()
     
