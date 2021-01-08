const tabsContent = document.querySelector(".tabs-content");
const tabLinks = document.querySelectorAll(".link");
const tabsParagraphs = document.querySelectorAll(".paratext");

const tabsArr = [
    {
        tabLink: "history",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores distinctio nemo mollitia omnis enim, rerum, illum ipsam pariatur necessitatibus similique aut beatae autem! Doloribus cupiditate aliquam quia temporibus impedit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quidem neque ad doloribus reiciendis hic, eaque tenetur mollitia dignissimos voluptatibus animi sunt nostrum eos culpa error sit expedita modi quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptate corrupti provident maiores maxime modi, assumenda sapiente repellat reprehenderit non deleniti, ipsum exercitationem nesciunt praesentium. Perspiciatis officia quaerat quo ipsa.",
    },
    {
        tabLink: "vision",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit repudiandae corrupti perferendis necessitatibus, cum optio qui, nihil sapiente iure hic voluptatum fugiat ad totam nemo explicabo nam est reprehenderit!",
    },
    {
        tabLink: "goals",
        paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptates in. Incidunt iusto natus numquam voluptates delectus sapiente explicabo ullam. Eaque praesentium accusamus aperiam soluta, aliquid dolore tempore voluptas vel, ipsum blanditiis a repellendus amet labore quis dolorum recusandae quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores ex, hic voluptates earum, consectetur modi assumenda dolor quis maiores facilis temporibus nam alias voluptatem, vero obcaecati cum? Tempore accusamus eligendi illum mollitia eum qui at veniam, ex dolorum sit impedit quasi, corporis, ipsam ullam libero consequatur? Pariatur, tempora aperiam esse dolorem, voluptates non iusto et architecto, maxime enim consequuntur consequatur delectus tempore minus dignissimos nulla! Quae quod, similique fuga omnis provident dolore? Similique qui facere rem quibusdam perferendis! Veniam molestias voluptates magni quam maxime labore expedita nisi et soluta beatae provident enim id reiciendis quod, aperiam, doloribus quis nostrum.",
    },
]

// tabsContent.addEventListener('click', (e) => {
//     const id = e.target.dataset.id;
//     const paragraph = document.getElementById(id);
//     if(id){
//         tabLinks.forEach((link) => {
//             link.classList.remove("paratext-active");
//             e.target.classList.add("paratext-active");
//         })
//         tabsParagraphs.forEach((tabParagraph) => {
//             tabParagraph.classList.remove("paratext-active");
//             paragraph.classList.add("paratext-active");
//         })
//     }
// })

// tabLinks.forEach((tabLink) => {
//     tabLink.addEventListener('click', () => {
//         tabLinks.forEach((sameTablink) => {
//             sameTablink.classList.remove("paratext-active");
//             tabLink.classList.add("paratext-active");
//         })
//         const id = tabLink.dataset.id;
//         const paragraph = document.getElementById(id);
//         tabsParagraphs.forEach((tabParagraph) => {
//             tabParagraph.classList.remove("paratext-active");
//             paragraph.classList.add("paratext-active");
//         })
//     })
// })

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', (e) => {
        const tabsIn = tabsArr.find((tabs) => tabs.tabLink === e.currentTarget.dataset.id)
        tabsParagraphs[0].innerHTML = tabsIn.paragraph;
        tabLinks.forEach((sameTablink) => {
            sameTablink.classList.remove("paratext-active");
            tabLink.classList.add("paratext-active");
        })
    })
})