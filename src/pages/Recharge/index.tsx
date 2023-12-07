import React, {useEffect, useState} from 'react';
import {Button, Card, message, Spin, Tooltip} from "antd";
import ProCard, {CheckCard} from "@ant-design/pro-card";
import KunCoin from "@/components/Icon/KunCoin";
import {history, useModel} from "@umijs/max";
import {
  listProductInfoByPageUsingPOST,
} from "@/services/tianCaiAPI/productInfoController";
// @ts-ignore
import wechat from "../../../public/assets/WeChat.jpg";
const PayOrder: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<API.ProductInfo[]>();
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState || {}
  const [total, setTotal] = useState<any>("0.00");
  const [productId, setProductId] = useState<any>("");

  useEffect(() => {
    if (total === "0.00") {
      setProductId('')
    }
  }, [total])

  const loadData = async () => {
    setLoading(true)
    const res = await listProductInfoByPageUsingPOST({});
    if (res.data && res.code === 0) {
      setProduct(res.data.records || [])
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Spin spinning={loading}>
        <Card style={{minWidth: 360}}>
          <ProCard type={"inner"} headerBordered bordered tooltip={"用于AI服务调用"}
                   title={<strong>我的钱包</strong>}>
            <strong>糯米 : </strong><span
            style={{color: "red", fontSize: 18}}>{currentUser?.balance}</span>
          </ProCard>
          <br/>
          <Card type={"inner"} title={<strong>积分商城 💰️</strong>}>
            <ProCard wrap>
              <CheckCard.Group
                onChange={(checkedValue) => {
                  if (!checkedValue) {
                    setTotal("0.00")
                    return
                  }
                  setTotal(checkedValue)
                }}
              >
                {product && product.map((item) => (
                  <CheckCard
                    key={item.id}
                    onClick={() => {
                      setTotal(item.price)
                      setProductId(item.id)
                    }}
                    description={item.description}
                    extra={
                      <>
                        <h3
                          // @ts-ignore
                          style={{
                            color: "red",
                            fontSize: item.productType === "RECHARGEACTIVITY" ? 16 : 18,
                            fontWeight: "bold"
                          }
                          }>￥
                          {item.productType === "RECHARGEACTIVITY" ? "体验 " : null}
                          {/*// @ts-ignore*/}
                          {(item?.price) / 100}
                        </h3>
                      </>
                    }
                    // @ts-ignore
                    actions={<><KunCoin></KunCoin></>}
                    style={{width: 220, height: 330}}
                    title={<strong>💰 {item.addCoin} 糯米</strong>} value={item.price}/>
                ))}
              </CheckCard.Group>
            </ProCard>
            <br/>
            <ProCard style={{marginTop: -20}} layout={"center"}>
              <span>本商品为虚拟内容,用于使用AI服务,购买后不支持<strong
                style={{color: "red"}}>退换</strong>。确认支付表示您已阅读并接受<a
                target={"_blank"}
                rel="noreferrer"> 用户协议 </a>
          ，如付款成功后10分钟后未到账，请联系站长微信：
             <Tooltip placement="bottom" title={<img src={wechat} alt="微信 code_nav" width="120"/>}>
               <a>JunGuGu20</a>
             </Tooltip>
            </span>
            </ProCard>
          </Card>
          <br/>
          <ProCard bordered headerBordered>
            <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", alignContent: "center"}}>
              <div style={{marginRight: "12px", fontWeight: "bold", fontSize: 18}}>实付</div>
              <div style={{marginRight: "20px", fontWeight: "bold", fontSize: 18, color: "red"}}>￥ {total / 100} 元
              </div>
              <Button style={{width: 100, padding: 5}} onClick={() => {
                if (!productId) {
                  message.error("请先选择积分规格哦")
                  return
                }
                message.loading("正在前往收银台,请稍后.....", 0.6)
                setTimeout(() => {
                  history.push(`/order/pay/${productId}`)
                }, 800)
              }} size={"large"} type={"primary"}>立即购买</Button>
            </div>
          </ProCard>
        </Card>
      </Spin>
    </>
  )
}

export default PayOrder;
