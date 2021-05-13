import ContainerStyles from '../Container/Container.module.css'

const Container = ({ children }) => <div className={ContainerStyles.Container}>{children}</div>;

export default Container;