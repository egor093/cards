import st from './cards.module.scss'

export default function Cards(props) {

    const cl = props.color;
    const color = props.cl;

    return (
        <div className={st.card}>
            <div>
                <div className={`${st.head} ${st[color]}`}>
                    <h1 className={st.white}>Безлимитный {props.num}</h1>
                </div>

                <div className={`${st.content} ${st[cl]}`}>
                    <p className={st.white}>руб <span>{props.num}</span> /месяц</p>
                </div>
            </div>

            <div className={st.dopInfo}>
                <p className={st.main}>до {props.number} Мбит/сек</p>
                <p>Объеб включенного</p>
                <p>трафика не ограничен</p>
            </div>
        </div>
    )
}