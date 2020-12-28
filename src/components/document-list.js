import {Alert, Collapse, Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import styles from './document-list.module.css';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

export function DocumentList({documents, processing}) {
    if (processing) {
        return (
            <div className={styles.container}>
                <Spin indicator={antIcon} />
            </div>
        );
    }
    if (!documents.length) {
        return (
            <div className={styles.wrapper}>
                <Alert message="По вашему запросов документов не найдено"
                       type="error"/>
            </div>
            );
    }
    return (<Collapse >
        {documents.map(d => (
            <Collapse.Panel header={d.title} key={d.id}>
                <p>{d.content}</p>
            </Collapse.Panel>
        ))}
    </Collapse>);
}