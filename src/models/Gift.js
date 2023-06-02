export class Gift{
    constructor(data){
        this.id = data.id
        this.tag = data.tag
        this.url = data.url || 'https://th.bing.com/th/id/OIP.qHzDR-c6M2ESUm6dMyOeqAHaIP?pid=ImgDet&rs=1'
        this.opened = false
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}