import React from 'react';
import './ContentBedrock.css';

function ContentBedrock() {
  return (
    <section className='bedrock'>
        <div className='bedrock-container'>
        <h1 className='title-bedrock'>Bitcoin as Bedrock For Blockchains</h1>
        <div className='bedrockk'>
            <div className='bedrock-row1'>
            <div>
                <img className='image-bedrock' src='https://pbs.twimg.com/profile_images/1251778842886356993/7NcITRG3_400x400.jpg' alt="Modular Icon" />
                <h3 className='subtitle-bedrock'>Modular</h3>
                <p className='content-bedrock'>Our modular architecture supports a flexible and adaptable infrastructure, allowing seamless integration with various protocols and stacks. This flexibility empowers developers to leverage Bitcoin L1’s security without burdening the Bitcoin network.</p>
            </div>

            <div className='bedrock-col2'>
                <img className='image-bedrock' src='https://cdn.awsli.com.br/600x450/502/502732/produto/56414778/be72194bfb.jpg' alt="Aggregation Icon" />
                <h3 className='subtitle-bedrock'>Aggregation</h3>
                <p className='content-bedrock'>At the core of our solution is aggregation. By combining multiple zk-proofs into a single, compact proof, we minimize load, making Bitcoin’s security more accessible and practical for a wide range of protocols.</p>
            </div>
            </div>

            <div className='bedrock-row2'>
            <div>
                <img className='image-bedrock' src='https://i.pinimg.com/originals/60/c0/33/60c03375a0fe67636c6d93197fb53d4d.jpg' alt="Aggregation Icon" />
                <h3 className='subtitle-bedrock'>Leaf-Level Verifiability</h3>
                <p className='content-bedrock'>LayerEdge ensures verifiability by allowing each protocol to verify its specific zk-proofs from the aggregated proof posted on the Bitcoin network. This preserves the integrity of individual computations while leveraging the security of Bitcoin L1.</p>
            </div>

            <div className='bedrock-col2'>
                <img className='image-bedrock' src='https://img.freepik.com/premium-vector/brutalist-geometric-star-shapes-colorful-symbols-abstract-star-shapes-swiss-minimalist-style_761512-493.jpg?w=360' alt="Aggregation Icon" />
                <h3 className='subtitle-bedrock'>Trust-minimized settlement</h3>
                <p className='content-bedrock'>LayerEdge enables a modular future for blockchains with its execution layer that keeps the settlement on Bitcoin leveraging BitVM.</p>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}

export default ContentBedrock;