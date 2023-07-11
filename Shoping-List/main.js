// 1. 사용자가 text input에서 item을 추가할 수 있다.
//    1-1. 사용자가 plus 버튼을 클릭
//    2-1. 사용자가 엔터기를 누른다.
// 2. 아이콘은 스크롤링이 되는 list에 등록된다.
// 3. delete를 누르면 item이 삭제된다.

// 필요한 dom 요소 정의
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn= document.querySelector('.footer__button');

//버튼을 눌렀을 때 이벤트를 처리하는 함수
function onAdd(){
    //1. 사용자가 입력한 텍스트를 받아온다.
    const text=input.value;
    //if 사용자가 빈 text를 반환하면 함수를 나간다.
    if(text ===''){
        input.focus();
        //input에 포커스가 있다가 button을 클릭하는 
        //순간, 버튼으로 포커스가 옮겨가기 때문에 다시 포커스를 input으로 설정해줘야 한다.
        return;
    }

    //2. 받아온 텍스트를 이용해서 새로운 아이템을 만듦 (텍스트 + 삭제 버튼)
    const item=createItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템을 추가
    items.appendChild(item);

    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block:'center'});

    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
    //input에 포커스를 준다.
    //포커스를 주면 사용자가 다시 input칸을 선택하지 않아도 자동으로 고정된다.

}

function createItem(text){
    //입력받은 텍스트를 전달한다.
    const itemRow=document.createElement('li');
    //li 노드에 itemRow를 할당한다.
    itemRow.setAttribute('class', 'item__row');
    //itemRow의 class를 item__row로 지정한다.

    const item=document.createElement('div');
    item.setAttribute('class','item');

    const name=document.createElement('span');
    name.setAttribute('class','item__name');
    name.innerText=text;
    //span에 innerText를 이용해서 전달받은 text를 할당한다.

    const deleteBtn=document.createElement('button');
    deleteBtn.setAttribute('class','item__delete');
    deleteBtn.innerHTML='<i class="fa-regular fa-trash-can"></i>';
    //I태그는 변경할 일이 없기 때문에 변수를 할당하지 않는다.
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    });
    //click이 되면 itemRow의 마지막 자식을 삭제한다.

    const itemDivider=document.createElement('div');
    itemDivider.setAttribute('class','item__divider');

    item.appendChild(name);
    //item에 name을 자식 노드 리스트 중 마지막 자식으로 붙인다.
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;

}

addBtn.addEventListener('click', ()=>{
    onAdd();
});

input.addEventListener('keypress',event => {
    if(event.key==='Enter'){
        onAdd();
    }
});