import webview
import os

class Api():
    def getMsg(self, info):
        print('All message: %s' % info)

if __name__ == '__main__':
    api = Api()
    webview.create_window('demo', 'asset/html/index.html', js_api=api, min_size=(600,500))
    webview.start()