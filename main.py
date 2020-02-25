#coding=utf-8
import webview
import os
import control.ctrl as ct

class Api:
    def __init__(self):
        self.ct = ct.Ctrl()

    def getMsg(self, info):
        print('All message: %s' % info)

    def printMsg(self,msg_name, msg_rtaddr, msg_direction, msg_subaddr, msg_wordcnt):
        self.ct.writeCodeToFile(msg_name, msg_rtaddr, msg_direction, msg_subaddr, msg_wordcnt)
        pass

if __name__ == '__main__':
    api = Api()
    webview.create_window('demo', 'asset/html/index.html', js_api=api, min_size=(600,500))
    webview.start()