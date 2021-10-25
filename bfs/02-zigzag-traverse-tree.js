class TreeNode{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const zigzag_traversal = root => {
    let result = [];
    if(root === null){
        return result;
    }
    let queue = [];
    queue.push(root);
    let leftToRight = true;
    while(queue.length>0){
        let levelSize = queue.length;
        let currentLevels = [];
        for(let i=0;i<levelSize;i++){
            let currentNode = queue.shift();
            if(leftToRight){
                currentLevels.push(currentNode.data);
            }else{
                currentLevels.unshift(currentNode.data);
            }

            if(currentNode.left !== null){
                queue.push(currentNode.left);
            }

            if(currentNode.right !== null){
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevels);
        leftToRight = !leftToRight;
    }
    return result;
}