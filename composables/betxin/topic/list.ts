export interface TopicListReq {
    cid: number
    page_token: string
}

export interface Topic {
    tid: number
    cid?: number
    title?: string
    intro?: string
    content?: string
    yes_ratio?: string
    no_ratio?: string
    yes_count?: string
    no_count?: string
    total_count?: string
    collect_count?: number
    read_count?: number
    img_url?: boolean
    is_stop?: boolean
    is_deleted?: number
    refund_end_time?: number
    end_time?: string
    is_collect?: boolean
}

interface TopicListResp {
    list: Topic[]
    pre_page_token: string
}

export const GetTopicListByCid = async (
    req: TopicListReq
): Promise<TopicListResp> => {
    try {
        const res = await http<TopicListResp>({
            method: 'GET',
            url: `/api/v1/topics/${req.cid}`,
            header: {
                'Content-Type': 'application/json',
            },
        })

        if (res.code !== 200) {
            throw new Error('连接失败')
        }

        console.log(res.data?.pre_page_token)
        console.log(res.data?.list)

        return res.data!
    } catch (error) {
        console.error(error)
        throw error
    }
}
