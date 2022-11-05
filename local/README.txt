

dependencies:
    python 3.6 or higher
    
    these commands should be executed:
        
        sudo pip3 install firebase-admin
        sudo pip3 install omxplayer-wrapper
        sudo pip3 install pause
        
        cd 
        sudo crontab -e
        
        # create a crontab file and add at the end:
        #   @reboot sh /home/pi/Desktop/raspi-syncer/syncer_luncher.sh > /home/pi/Desktop/r$
        # save the file and reboot




