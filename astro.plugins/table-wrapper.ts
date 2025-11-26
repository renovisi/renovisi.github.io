import { visit } from 'unist-util-visit';

export default function tableWrapper() {
    return (tree) => {
        visit(tree, 'table', (node, index, parent) => {
            if (!parent || typeof index !== 'number') return;
            // Wrap the table node in a div
            const wrapper = {
                type: 'element',
                tagName: 'div',
                children: [node],
            };
            parent.children[index] = wrapper;
        });
    };
}