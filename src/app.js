import {
    Layout
} from 'antd';
import styles from './app.module.css';
import {useFilters} from './hooks/filters';
import {useDocuments} from "./hooks/documents";
import {Filters} from './components/filters';
import {DocumentList} from "./components/document-list";

function App() {
    const [filters, applyFilters] = useFilters();
    const [documents, processing] = useDocuments(filters);

    return (
        <Layout>
            <Layout.Header className={styles.header}>Поиск документов</Layout.Header>
            <Layout>
                <Layout.Sider className={styles.sider} width={280}>
                    <Filters applyFilters={applyFilters} disabled={processing}/>
                </Layout.Sider>
                <Layout.Content className={styles.content}>
                    <DocumentList documents={documents} processing={processing} />
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default App;
