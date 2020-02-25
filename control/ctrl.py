#coding=utf-8
import os

class Ctrl:
    def __init__(self):
        #初始状态先将文件内容清空,这个策略未必好
        self.srcFile = open('./outputDir/MsgDef.c', 'w+', encoding='utf-8')
        originalStr = "#include \"MsgDef.h\"\n\n"
        self.srcFile.write(originalStr)
        self.srcFile.close()
        pass

    def writeCodeToFile(self, msg_name, msg_rtaddr, msg_direction, msg_subaddr, msg_wordcnt):
        """打开文件,将1553b数据直接追加至打开文件的最末尾"""
        try:
            self.srcFile = open('./outputDir/MsgDef.c', 'a+', encoding='utf-8')
        except:
            print("can not open file")

        writeBuf = "ST_1553Msg {}\n{{\n\t{},\n\t{},\n\t{},\n\t{},\n}};\n".format(msg_name, msg_rtaddr,msg_direction,msg_subaddr, msg_wordcnt)
        self.srcFile.write(writeBuf)
        self.srcFile.close()
