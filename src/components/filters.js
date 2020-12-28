import {Alert, Button,  DatePicker, Input, Select} from "antd";
import styles from "./filters.module.css";
import {useState} from "react";

const {RangePicker} = DatePicker;
const {Option} = Select;

export function Filters({applyFilters, disabled}){
    const [dateRange, setDateRange] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const [sortColumn, setSortColumn] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState('desc');
    const [currentTitle, setCurrentTitle] = useState('');
    const onChange = (_, isoRange) => {
        setDateRange(isoRange);
    };
    const onSubmit = () => {
        applyFilters({
            id: currentId,
            dateRange: dateRange,
            title: currentTitle,
            sortColumn,
            sortOrder
        })
    };
    return (
        <div>
            <span>ID документа</span>
            <Input value={currentId} onChange={e => setCurrentId(e.target.value)}/>
            <Alert message="Если заполнено поле ID документа, все остальные поля будут проигнорированы"
                   className={styles.warning}
                   type="warning"/>
            <span>Создан</span>
            <RangePicker onChange={onChange}/>
            <span>Название документа</span>
            <Input value={currentTitle} onChange={e => setCurrentTitle(e.target.value)}/>
            <span>Сортировка</span>
            <div className={styles.sort}>
                <Select defaultValue="createdAt" onChange={setSortColumn}>
                    <Option value="createdAt">Создан</Option>
                    <Option value="title">Название</Option>
                </Select>
                <Select defaultValue="desc" onChange={setSortOrder}>
                    <Option value="desc">По убыванию</Option>
                    <Option value="asc">По возрастанию</Option>
                </Select>
            </div>
            <Button disabled={disabled} className={styles.button} onClick={onSubmit}>
                Отправить
            </Button>
        </div>
    )
}