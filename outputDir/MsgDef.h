#ifndef _MSGDEF__H_
#define _MSGDEF__H_

//以下关于1553消息地址,自地址,自长度所使用的宏定义
#define         DEF_1553MSG_NO_0                0
#define         DEF_1553MSG_NO_1                1
#define         DEF_1553MSG_NO_2                2
#define         DEF_1553MSG_NO_3                3
#define         DEF_1553MSG_NO_4                4
#define         DEF_1553MSG_NO_5                5
#define         DEF_1553MSG_NO_6                6
#define         DEF_1553MSG_NO_7                7
#define         DEF_1553MSG_NO_8                8
#define         DEF_1553MSG_NO_9                9
#define         DEF_1553MSG_NO_10               10
#define         DEF_1553MSG_NO_11               11
#define         DEF_1553MSG_NO_12               12
#define         DEF_1553MSG_NO_13               13
#define         DEF_1553MSG_NO_14               14
#define         DEF_1553MSG_NO_15               15
#define         DEF_1553MSG_NO_16               16
#define         DEF_1553MSG_NO_17               17
#define         DEF_1553MSG_NO_18               18
#define         DEF_1553MSG_NO_19               19
#define         DEF_1553MSG_NO_20               20
#define         DEF_1553MSG_NO_21               21
#define         DEF_1553MSG_NO_22               22
#define         DEF_1553MSG_NO_23               23
#define         DEF_1553MSG_NO_24               24
#define         DEF_1553MSG_NO_25               25
#define         DEF_1553MSG_NO_26               26
#define         DEF_1553MSG_NO_27               27
#define         DEF_1553MSG_NO_28               28
#define         DEF_1553MSG_NO_29               29
#define         DEF_1553MSG_NO_30               30
#define         DEF_1553MSG_NO_31               31

//以下关于1553消息方向的宏定义
#define         DEF_1553MSG_DIRECTION_R         0
#define         DEF_1553MSG_DIRECTION_T         1

typedef struct _ST_1553Msg
{
    UINT8 u_bMsgRTAddress;
    UINT8 u_bMsgDirection;
    UINT8 u_bMsgSubAddress;
    UINT8 u_bMsgWordCnt;
}ST_1553Msg;

#endif