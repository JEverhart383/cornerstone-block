var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	blockStyle = { backgroundColor: '#fff', border: '2px solid #900', color: '#000', padding: '20px' };

registerBlockType( 'cornerstone-block/test-block', {
	title: 'Cornerstone Block 1',
	icon: 'universal-access-alt',
	category: 'layout',
	edit: function() {
		return el( 'p', { style: blockStyle }, 'This is what appears in the editor.' );
	},

	save: function() {
		return el( 'p', { style: blockStyle }, 'This is what gets saved into post content.' );
	},
} );