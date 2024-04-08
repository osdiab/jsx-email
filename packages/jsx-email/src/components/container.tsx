import * as config from '../config';
import { debug } from '../debug';
import type { BaseProps, JsxEmailComponent } from '../types';

export interface ContainerProps extends Omit<BaseProps<'table'>, 'align'> {
  alignment?: 'center' | 'left' | 'right';
}

const configDds = config.current.render.disableDefaultStyle;
const debugProps = debug.elements.enabled ? { dataType: 'jsx-email/container' } : {};

export const Container: JsxEmailComponent<ContainerProps> = ({
  alignment = 'center',
  children,
  disableDefaultStyle,
  style,
  ...props
}) => (
  <table
    align={alignment}
    width="100%"
    {...props}
    {...debugProps}
    role="presentation"
    cellSpacing="0"
    cellPadding="0"
    border={0}
    style={{ ...(configDds || disableDefaultStyle ? {} : { maxWidth: '37.5em' }), ...style }}
  >
    <tbody>
      <tr style={configDds || disableDefaultStyle ? {} : { width: '100%' }}>
        <td align={alignment}>{children}</td>
      </tr>
    </tbody>
  </table>
);

Container.displayName = 'Container';
