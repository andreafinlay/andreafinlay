/* eslint-disable space-before-function-paren */
function template(
    { template },
    opts,
    { imports, componentName, props, jsx, ...others },
) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });
    const defaultTitle =
        componentName.name.indexOf('Svg') === 0
            ? componentName.name.substring(3)
            : componentName.name;
    return typeScriptTpl.ast`
      import React from 'react';
      import { SvgIconProps } from '../icons.types';
      
      const ${componentName} = ({size, title = '${defaultTitle}', ...props}: SvgIconProps): JSX.Element => ${jsx};
      
      export default ${componentName};
    `;
}
module.exports = template;
