import st from './style/App.module.scss';
import Cards from './Components/Cards/Cards';

function App() {

const nums = [300,450,550,1000];
const colors = ['red','green','blue','gray'];
const color = ['darkred','darkgreen','darkblue','black'];
const numbers = [10,50,100,200];

    return (
        <div className={st.app}>
            <Cards num = {nums[0]} color = {colors[0]} number = {numbers[0]} cl = {color[0]}/>
            <Cards num = {nums[1]} color = {colors[1]} number = {numbers[1]} cl = {color[1]}/>
            <Cards num = {nums[2]} color = {colors[2]} number = {numbers[2]} cl = {color[2]}/>
            <Cards num = {nums[3]} color = {colors[3]} number = {numbers[3]} cl = {color[3]}/>
        </div>
    );
}

export default App;
