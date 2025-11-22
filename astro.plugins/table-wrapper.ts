import { visit } from 'unist-util-visit';

export default function tableWrapper() {
    return (tree) => {
        visit(tree, 'table', (node, index, parent) => {
            // Wrap the table node in a div
            const wrapper = {
                type: 'element',
                tagName: 'div',
                children: [node],
            };
        });
    };
}