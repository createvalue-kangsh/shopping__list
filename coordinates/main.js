const vertical = document.querySelector('.vertical');
//dom 요소를 변수에다가 할당한다. 한 번 할당 후에는 다른 것으로 변환할 이유가 없기 때문에 상수에 할당한다.
//변수에 document에 있는 querySelector를 사용해서 .(클래스 선택자) 요소를 할당한다. 
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');



addEventListener('load',()=>{
    //윈도우가 로드가 될 때, target의 크기를 읽어와서 document에 mousemove라는 이벤트를 등록한다.
    const targetRect=target.getBoundingClientRect();
    const targetHalfWidth=target.width/2;
    //target의 넓이 반 사이즈를 받아온다.
    const targetHalfHeight=target.height/2;
    //target의 높이 반 사이즈를 받아온다.

    //window 위에서 마우스가 move한다
    //move할 때 (=event가 발생할 때) 항상 event object가 전달되기 때문에
document.addEventListener('mousemove',event=>{
    //문서 위에서 addEventListener를 사용해서 함수를 호출한다.
    const x= event.clientX; // 상수 x 는 event에 있는 clientX이다.
    const y= event.clientY; // 상수 y 는 event에 있는 clientY이다.

    vertical.style.transform=`translateX(${(x)}px)`;
    horizontal.style.transform=`translateY(${(y)}px)`;
    target.style.transform=`translate(${(x-targetHalfWidth)}px, ${(y-targetHalfHeight)}px)`;
    tag.style.transform=`translate(${(x)}px, ${(y)}px)`;

    tag.innerHTML =`${x}px, ${y}px`;
    //tag(요소)안에 있는 innerHTML: element 속성(property) innerHTML은 요소 (element)내에 포함된
    //HTML 또는 XML 마크업을 가져오거나 설정한다.
    });
});


