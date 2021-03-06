var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	RichText = wp.blocks.RichText;

registerBlockType( 'cornerstone-block/test-block', {
	title: 'Hello World (Step 3)',

	icon: 'universal-access-alt',

	category: 'layout',

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		}
	},

	edit: function( props ) {
		var content = props.attributes.content;

		function onChangeContent( newContent ) {
			props.setAttributes( { content: newContent } );
		}

		return el(
			RichText,
			{
				tagName: 'p',
				className: props.className,
				onChange: onChangeContent,
				value: content,
				isSelected: props.isSelected,
			}
		);
	},

	save: function( props ) {
		var content = props.attributes.content;

		return el( 'p', { className: props.className }, content );
	},
} );