import { SearchOutlined, XOutlined } from "@ant-design/icons";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const cardDataList = [
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
    {
      img: "https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg",
      title: "February Recap: Building, Shipping and Scaling LayerEdge",
      description:
        "In February, we focused on one thing — building and shipping.The first phase of our incentivized testnet was an overwhelming success, and…",
      subImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=",
      author: "LayerEdge",
      createdAt: "Mar 7",
      timeRead: "3 min read",
    },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles["header-container"]}>
        <div className={styles.logo}>
          {/*Coc coc coi dc logo */}
          {/* <img src="https://cdn-images-1.medium.com/v2/resize:fit:213/1*mwhFwH-PJ61XOkBfE6joeg@2x.png" /> */}

          <p>LayerEdge</p>
        </div>

        <div className={styles.menu}>
          <span>
            <SearchOutlined />
          </span>
          <span>
            <XOutlined />
          </span>
          <button>Follow</button>
        </div>
      </div>

      <div className={styles.container}>
        <div
          onClick={() => {
            navigate("/blog/detail");
          }}
          className={styles["first-post-wrap"]}
        >
          <div className={styles["first-post-img-wrap"]}>
            <img src="https://www.accesswire.com/imagelibrary/f44186c8-a4e0-4c44-9ab6-d74210a3d35c/863863/MJZEorexKT83Z1ijnyqdgjepNWHl03CsGuLmogESt5vyz3KPvDiLumb00GIEOmDhwbDO1r9Jaa_WS-zZAh_l97MHWaCQHHTacF6eb5UlKbGB0yXikY6R3e0w7xrwF9GoQg4ds1hYTY9oMyCz7Y027kE.jpg" />
          </div>

          <div className={styles["first-post-info-wrap"]}>
            <h4>February Recap: Building, Shipping and Scaling LayerEdge</h4>
            <p>
              In February, we focused on one thing — building and shipping. The
              first phase of our incentivized testnet was an overwhelming
              success, and…
            </p>

            <div className={styles["sub-info"]}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAZlBMVEUAAAD///8UFBS0tLRRUVFfX1+np6dJSUk+Pj6hoaG7u7v6+vpjY2Pw8PBDQ0OOjo4iIiJtbW0uLi7X19eDg4Nzc3Ourq5aWlo2Njbe3t4PDw/p6eloaGiYmJh+fn4qKirOzs7ExMQ9I3uNAAACaUlEQVR4nO3c7U7CQBBGYT4rtBRQFEEE8f5v0vhDE2MLhc7Mu9mc5wo8IVJ2druDAQAAAAAAAAAAAAAAAAAAAAAAAHDVshxHKJeSusUwxqukbhpUt8u6ThIXVVdlXbfPum6cdd1L1nVvOdeJ/u2C6lZZ14niYupE35hBdeuc62QfXUSd6FdYUN1jznWfujj/uoMwzr2uGuVc96SMc66rtHG+dQfR0iCkrhS3edZV7+o2x7qtuuybU91W+iD45VG3eVZX/TCetNebQviz8p/Rg52d+gEAAACAZMyK+S2Op8WH+k++wR1rhOp8FA+DOrtzfbdX7Tfe5v7Va6H+0zvosTavklmCt+o1edjLth076jlXSWnM0KDv1GiuDrio90xMt23cQf+JX8p5BvPMo7qhncW0NoENgxYms+g0xuoNTOo26oo2NvsIouOXV9nUCQ/cXGS0B5ToksGoLtEPz2r/Ls3/PKu6szqkkdneqzqkkVndSV3SxKxOfzilgVmd9CxfG7szD+qSJnZ1mjfsLrOrm6pTGtjVpfg8tzuNk+J0c7Sc2VimPtsEAABApNm2MDNfnSbqnr/M78apy1M6R9td3iXZpLLWc3pTpk5jtef2llO9UKcNXN+/U76s7F83rDSXiAXV6SdJzu8si79cvN/I1ua53xUgPczif8+DcgLvX6fcHAq4gUT49nLE3TizrOtUt4kF3dok2/wKqZOdkou5LU31VIipU31txtTVWdepHgpBdaITjkF1onV6UJ3oxyb3RVvQHOqPqsv7FnrNdHM9icFZHQAAAAAAAAAAAAAAAAAAAAAAACujnH0BXXUyzIXiMsoAAAAASUVORK5CYII=" />
              <div className={styles["sub-info-text"]}>
                <p>LayerEdge</p>
                <p>Mar 7 . 3 min read</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["post-list-container"]}>
          {cardDataList.map((card, index) => (
            <div
              onClick={() => {
                navigate("/blog/detail");
              }}
              key={index}
              className={styles["post-card"]}
            >
              <img src={card.img} />

              <div className={styles["post-card-info"]}>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
              <div className={styles["post-card-footer"]}>
                <img src={card.subImg} />
                <div className={styles["footer-text"]}>
                  <p>{card.author}</p>
                  <p>
                    {card.createdAt} . {card.timeRead}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
