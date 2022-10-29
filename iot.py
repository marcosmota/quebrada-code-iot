from pyfirmata import ArduinoNano, util
import time 

port = '/dev/tty.usbserial-A50285BI' 
board = ArduinoNano(port) 

it = util.Iterator(board)
it.start()

board.analog[0].enable_reporting()

while True : 
            print (board.analog[0].read())
            time.sleep(1)    
