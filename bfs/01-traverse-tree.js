class TreeNode{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const traverse = root => {
    let result = [];
    if(root === null){
        return result;
    }

    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let levelSize = queue.length;
        let currentLevel = [];
        for(let i=0;i<levelSize;i++){
            let currentNode = queue.shift();
            currentLevel.push(currentNode.data);
            if(currentNode.left !== null){
                queue.push(currentNode.left);
            }

            if(currentNode.right !== null){
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
}

